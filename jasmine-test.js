var median={
    med:function(arr){
      var len=arr.length;
              arr.sort(function(a, b){return a-b});
              var result,index;
              if(len%2===0)
              {
                index=len/2;
                result=(parseInt(arr[index-1])+parseInt(arr[index]))/2;
              }
              else
              {
                index=Math.floor(len/2);
                result=arr[index];
              }
              return result;
            }
  };
describe("Sample Test Suite", function() {

  it("sample thrutiness test", function() {
    expect(true).toBeTruthy();
  });

});

describe("median", function() {
    
  it("median method should be implemented", function() {
    expect(median.med).toBeDefined();
  });
  it("median of an array", function() {
    expect(median.med([5, 1, -7, 7, 8, 3])).toEqual(4);
    expect(median.med([5, 1, -7, 7, 8, 3, 9])).toEqual(5);
  });
});
