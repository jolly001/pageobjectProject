

const ExcelJs = require ('exceljs')
const {test, expect} = require ('@playwright/test')

const output = {row: -1, coll: -1};
async function readXls(searchText, replaceText,filePath){

const workbook = new ExcelJs.Workbook();
await workbook.xlsx.readFile(filePath);
let worksheet = workbook.getWorksheet('Sheet1');
 readExcelFile(worksheet,searchText);

   const cell = worksheet.getCell(output.row, output.coll);
    cell.value = replaceText;
     await workbook.xlsx.writeFile(filePath);

}

async function readExcelFile(worksheet,searchText){
    worksheet.eachRow((row, rowNum)=> {
    row.eachCell((cell, colNum) =>{
            //console.log(cell.value);
            if(cell.value===searchText){
                output.row = rowNum;
                output.coll= colNum;

            
            }


    })



})
}
//readXls("Mango", "Kiwi", "C:/Users/Vivek Jolly/Downloads/download.xlsx");

test('downloadTest', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    await page.waitForLoadState('networkidle');


    const [download] = await Promise.all([

             page.waitForEvent('download'),
             page.locator('#downloadButton').click(),
            

    ]);

    await download.saveAs('C:/Users/Vivek Jolly/Downloads/download.xlsx');
    

    await readXls("Mango", "Kiwi", "C:/Users/Vivek Jolly/Downloads/download.xlsx");
    //await page.waitForTimeout(5000);
    await page.locator('#fileinput').click();
    await page.locator('#fileinput').setInputFiles('C:/Users/Vivek Jolly/Downloads/download.xlsx');
    await page.pause();
    

});
