# AltiusHub Assessment: Frontend
## Invoice App

Invoice Management app

This is a webapplication for managing invoices built using reactjs, vite, materialUI.

### Thought process


* Understanding Requirements: App aligns with provided interfaces, Material, Design and functional need (CRUD).
* Defining Interfaces: Establish clear data structures(Invoice,InvoiceItem,invoiceBillSundry)
* Plan Components: AppComponent(toolbar,navigation),InvoiceListVComponent and InvoiceDetailComponent
* Navigation: Use React routes (/invoices,/invoice-detail/:id)
* Invoice List: Material table with paginators and row manipulations 
* Used useState for managing the pagination "page", number of items displayed per page, showing the form.
* used conditional rendering either the invoice form to display the form.
* used material ui for tablem, button, pagination for styling
* Invoice Form: Used Formik for Form  validations, calculating fields like Amount and creating items and bill sundries using FieldArray
*  Created fuctions like handleSubmit t log the form data and redirect while handlecancle also manages redirection.