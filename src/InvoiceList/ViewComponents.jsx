import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableHead, TableCell, TableContainer, Pagination, Paper, Button } from '@mui/material';
import InvoiceForm from '../InvoiceForm/InvoiceForm';

const ViewComponents = () => {
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(5);
    const [showAddForm, setShowAddForm] = useState(false);
    
    const invoices = [
        // {
        //     Id: string;
        //     Date: string;
        //     InvoiceNumber: number;
        //     CustomerName: string;
        //     BillingAddress: string;
        //     ShippingAddress: string;
        //     GSTIN: string;
        //     Items: InvoiceItem[];
        //     BillSundrys: InvoiceBillSundry[];
        //     TotalAmount: number;
        //     } Interface InvoiceItem {
        //     Id: string;
        //     itemName: string;
        //     quantity: number;
        //     price: number;
        //     amount: number;
        //     }
        //     Interface InvoiceBillSundry {
        //     Id: string;
        //     billSundryName: string;
        //     amount: string;
        //     }

        {id:1, invoiceNumber: 'INV001', amount:100},
        {id:2, invoiceNumber: 'INV002', amount:100},
        {id:3, invoiceNumber: 'INV003', amount:100},
        {id:4, invoiceNumber: 'INV004', amount:100},
        {id:5, invoiceNumber: 'INV005', amount:100},
        {id:6, invoiceNumber: 'INV006', amount:100},
        {id:7, invoiceNumber: 'INV007', amount:100},
            
    ];

    const handlePageChange = (event,value) => {
        setPage(value);
    };
    const startIndex = (page-1)*rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return (
        <div>
           {showAddForm?(
            <div>
                <InvoiceForm onCancel = {()=>setShowAddForm(false)}/>
            </div>
           ):(
            <div>
                <Button onClick={()=> setShowAddForm(true)} variant = "contained" color = "primary">Add</Button>
                <TableContainer component = {Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Invoice Number
                                </TableCell>
                                <TableCell>
                                    Amount
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoices.slice(startIndex,endIndex).map((invoice)=>(
                                <TableRow key = {invoice.id} component={Link} to = {`/invoice-detail/${invoice.id}`}>
                                    <TableCell>{invoice.invoiceNumber}</TableCell>
                                    <TableCell>{invoice.amount}</TableCell>
                                </TableRow>
                                

                            ))}
                        </TableBody>


                    </Table>
                </TableContainer>
                <Pagination count={Math.ceil(invoices.length/rowsPerPage)} page = {page} onChange = {handlePageChange} />
            </div>
    )
}
    </div>)
};

export default ViewComponents;