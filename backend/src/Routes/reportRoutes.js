const express=require('express')

const router= express.Router()
const {issueReport,issuedReport, seen, allReports,updateStatus,followUP}=require('../Controllers/reprotController')

router.post('/issueReport',issueReport)
router.post('/issuedReport',issuedReport)
router.post('/seen',seen)
router.post('/updateStatus',updateStatus)
router.post('/followUP',followUP)

router.get('/allReports',allReports)

module.exports=router