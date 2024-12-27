const blogRoutes=require('./blog');
const commentRoutes=require('./comment')

const { Router } = require("express");

// router.use('/v1/blog',blogRoutes);

const router = Router();

router.use('/blog', blogRoutes)
router.use('/comment',commentRoutes); 

module.exports=router;
