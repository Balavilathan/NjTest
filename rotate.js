var rotate = function(nums, k) {
    console.log(nums);
    var vlen = nums.length;
    for(let i = 1 ; i <= k ; i++)
     {
       nums.splice(0,0,nums[vlen - 1]);
       nums = nums.slice(0,vlen);
       console.log(nums);
     }
};

rotate([1,2,3,4,5,6], 5);

// other easy wasy is 888888888888
var arrValue = [1,2,3,4,5,6];
arrValue = arrValue.reverse();
console.log('Reversed: \n' , arrValue);