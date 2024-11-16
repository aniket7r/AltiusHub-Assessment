import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableHead, TableCell, TableContainer, Pagination, Paper, Button } from '@mui/material';
import InvoiceForm from '../InvoiceForm/InvoiceForm';

const ViewComponents = () => {
    const [page, setPage] = useState(1);
    const [rowPerPage] = useState(5);
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
            
    ]
}