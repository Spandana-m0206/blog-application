const blogRoutes=require('./blog');
const commentRoutes=require('./comment')
const express=require('express');
const router=express.Router();

router.use('/v1/blog',blogRoutes);
router.use('/comment',commentRoutes);

module.exports=router;
