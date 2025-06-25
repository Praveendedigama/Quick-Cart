const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 3000; //check

const BookmarkRoute = require('./route/BookmarkRoute'); 
const CartRoute = require('./route/CartRoute'); 
const CategoryRoute = require('./route/CategoryRoute'); 
const DealRoute = require('./route/DealRoute'); 
const OrderRoute = require('./route/OrderRoute'); 
const PaymentMethodRoute = require('./route/PaymentMethodRoute'); 
const PaymentRoute = require('./route/PaymentRoute'); 
const ProductRoute = require('./route/ProductRoute'); 
const RefundRoute = require('./route/RefundRoute'); 
const ReturnRoute = require('./route/ReturnRoute'); 
const ReviewRoute = require('./route/ReviewRoute'); 
const RoleRoute = require('./route/RoleRoute'); 
const UserRoute = require('./route/UserRoute'); 
const VoucherRoute = require('./route/VoucherRoute'); 
const VoucherDetailsRoute = require('./route/VoucherDetailsRoute'); 

const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/quick_cart_db').then(() => {
    console.log('Connected to Database');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});



app.use('/api/v1/bookmarks', BookmarkRoute);//check
app.use('/api/v1/cart', CartRoute);
app.use('/api/v1/categories', CategoryRoute);
app.use('/api/v1/dealers', DealRoute);
app.use('/api/v1/orders', OrderRoute);
app.use('/api/v1/paymentmethods', PaymentMethodRoute);
app.use('/api/v1/payments', PaymentRoute);
app.use('/api/v1/products', ProductRoute);
app.use('/api/v1/refunds', RefundRoute);
app.use('/api/v1/returns', ReturnRoute);
app.use('/api/v1/reviews', ReviewRoute);
app.use('/api/v1/roles', RoleRoute);
app.use('/api/v1/users', UserRoute);
app.use('/api/v1/vouchers', VoucherRoute);
app.use('/api/v1/voucherdetails', VoucherDetailsRoute); 

app.listen(port, () => {
    console.log(`Server up & running on port ${port}`);
}
);