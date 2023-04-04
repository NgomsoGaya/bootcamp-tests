function mostProfitableDepartment(salesData){
    var departmentMap = {};
    for (var i = 0; i < salesData.length; i++){
    var eachSale = salesData[i];
    if (departmentMap[eachSale.department] === undefined){
        departmentMap[eachSale.department] = 0
        }
        departmentMap[eachSale.department] += eachSale.sales
        }
   var mostProfit = 0;
   var dep = "";
      for (var department in departmentMap){
      if(departmentMap[department] > mostProfit){
       mostProfit = departmentMap[department];
       dep = department;
      }
    }
   return dep;
 }