import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";

import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { hover } from "@testing-library/user-event/dist/hover";
import "./Cryptocurrencies.css";

const useStyles = makeStyles((theme) => ({
  table: {},
  tableContainer: {
    // width:"95vw"
    // tableLayout: "fixed",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
  cryptoImage: {
    height: "20px",
    width: "20px",
  },
  tablerow: {
    "&:hover": {
      background: "lightblue",
    },
  },
}));

const Cryptocurrencies = ({ simplified }) => {
  // const count = simplified ? 5 : 15;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="searchbox">
        <p className="popular-title">Popular cryptocurrencies</p>
        <div className="search-crypto">
          <input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Name</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Last Price
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                24h Change
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Market Cap
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptos
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((currency) => (
                <TableRow
                  key={currency.uuid}
                  className={classes.tablerow}
                  // onClick={() => { navigate(`/crypto/${currency.uuid}/`); }}
                >
                  <TableCell>
                    <Typography>
                      <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                        
                        {`${currency.rank}. ${currency.name}`}
                        
                        <img
                          className={classes.cryptoImage}
                          src={currency.iconUrl}
                        />
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                      <Typography color="primary" variant="subtitle2">
                        ${millify(currency.price)}
                      </Typography>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                      {currency.change > 0
                        ? "+" + currency.change
                        : currency.change}
                      %
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                      ${millify(currency.marketCap)}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={cryptos?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default Cryptocurrencies;
