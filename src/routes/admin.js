const express = require("express");
const router = express.Router();
const apiAdmin = require("../api/admin/apiAdmin");
const apiUser = require("../api/admin/apiUser");
const apiProduct = require("../api/admin/apiProduct");
const apiOrderManagement = require("../api/admin/apiOrderManagement");
const upload = require("../middleware/UploadImg");

// admin
router.get("/loginAdmin", apiAdmin.loginAdmin);
router.post("/loginAdmin", apiAdmin.handleLoginAdmin);
router.get("/logoutAdmin", (req, res) => {
    res.cookie("jwtadmin", "", { maxAge: 0 });
    res.cookie("adminUserId", "", { maxAge: 0 });
    res.cookie("adminname", "", { maxAge: 0 });
    res.cookie("adminemail", "", { maxAge: 0 });
    res.cookie("adminusername", "", { maxAge: 0 });
    res.cookie("adminaddress", "", { maxAge: 0 });
    return res.redirect("/loginAdmin");
});
router.get("/admin", apiAdmin.getHome);



//product
router.get(
    "/admin/product",
    apiProduct.getProductHome2
);
router.get("/admin/product/page/:currentPage", apiProduct.getProductHome);
router.get(
    "/admin/product/edit/:id",
    apiProduct.getProductDetail
);
router.post(
    "/admin/product/edit",
    upload.single("image"),
    apiProduct.updateProduct
);
router.get(
    "/admin/product/delete/:id",
    apiProduct.deleteProduct
);
router.post(
    "/admin/product",
    apiProduct.getProductByName
);
router.get(
    "/admin/product/:name/page/:currentPage",
    apiProduct.getProductByNamePage
);
router.get(
    "/admin/product/create",
    apiProduct.getCreateProduct
);
router.post(
    "/admin/product/create",
    upload.single("image"),
    apiProduct.createProduct
);

//user
router.get("/admin/user", apiUser.getUserHome);
router.get("/admin/user/page/:currentPage", apiUser.paginationUser);
router.post("/admin/user/", apiUser.getUserByUserName);
router.get(
    "/admin/user/:username/page/:currentPage",
    apiUser.getUserByUserNamePage
);
router.get(
    "/admin/user/update/:id",
    apiUser.getUpdateUser
);
router.post(
    "/admin/user/update",
    apiUser.UpdateUser
);
router.get(
    "/admin/user/delete/:id",
    apiUser.deleteUser
);

//order
router.get(
    "/admin/order",
    apiOrderManagement.getOrderHome
);
router.get(
    "/admin/order/confirm/:orderId",
    apiOrderManagement.confirmOrder
);
router.get(
    "/admin/order/delete/:orderId",
    apiOrderManagement.deleteOrder
);
router.get("/admin/order/page/:currentPage", apiOrderManagement.paginationOrder);

module.exports = router;