import React, { useEffect, useState } from "react";
//https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo

import ReactLoading from "react-loading";

import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface CompanyState {
  Name: string;
  Symbol: string;
  Description: string;
  Country: string;
  Exchange: string;
}

const CompanyOverview = () => {
  const [company, setCompany] = useState<CompanyState | null>(null);
  const [symbolQuery, setSymbolQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCompanyOverview = async () => {
    setLoading(true);
    if (symbolQuery) {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbolQuery}&apikey=${
            import.meta.env.VITE_ALPHAVANTAGE_KEY
          }`
        );
        const data = await response.json();
        console.log(data);
        setCompany(data);
      } catch (error) {
        toast.error("big problems");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <ToastContainer />
      {loading && (
        <ReactLoading type="bars" color="blue" height={667} width={375} />
      )}
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px"}}>
        <TextField
          fullWidth
          placeholder="IBM"
          inputProps={{ "aria-label": "description" }}
          type="text"
          value={symbolQuery}
          onChange={(e) => setSymbolQuery(e.target.value)}
        />
        <Button onClick={fetchCompanyOverview} variant="text">
          search company
        </Button>
      </div>
      {company ? (
        <>
          <h2>{company?.Name}</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Description
                  </TableCell>
                  <TableCell>{company?.Description}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Country
                  </TableCell>
                  <TableCell>{company?.Country}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Symbol
                  </TableCell>
                  <TableCell>{company?.Symbol}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Exchange
                  </TableCell>
                  <TableCell>{company?.Exchange}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CompanyOverview;
