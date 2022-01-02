const min= (...nums)=>{
    let max=nums[0],min=nums[0];
    for(let i=0;i<nums.length;i++) {
        if(nums[i]>max)
        max=nums[i];

        if(nums[i]<min)
        min=nums[i];

        console.log("max:"+max);
        console.log("min:"+min);
    }
}