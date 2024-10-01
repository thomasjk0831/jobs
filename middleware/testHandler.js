import {StatusCodes} from 'http-status-codes'

const testHandler = (err, req, res, next)=>{
    console.log(err)
    const statusCode = err.statusCode || StatusCodes.NOT_ACCEPTABLE
    const msg = err.message || ' error'
    res.status(statusCode).json({msg})
}

popupTemplate.content = "<p>As of 2015, <b>{MARRIEDRATE}%</b> of the" +
" population in this zip code is married.</p>" +
"<ul><li>{MARRIED_CY} people are married</li>" +
"<li>{NEVMARR_CY} have never married</li>" +
"<li>{DIVORCD_CY} are divorced</li><ul>"

export default errorHandler

