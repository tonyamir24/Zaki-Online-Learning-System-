const express=require('express')

const router= express.Router()
const {issueRequest, allRequests,grantAccess,issueRefundRequest,refund,allRefundRequests}=require('../Controllers/requestController')

router.post('/issueRequest',issueRequest)
router.post('/grantAccess',grantAccess)

router.post('/issueRefundRequest',issueRefundRequest)
router.post('/refund',refund)


router.get('/allRequests',allRequests)
router.get('/allRefundRequests',allRefundRequests)

module.exports=router