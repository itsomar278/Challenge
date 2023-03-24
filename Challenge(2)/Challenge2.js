function MajorityNum(nums)
{
    if(nums.length == 1 )
    {
        return nums[0];
    }
    var dict = {};
    for (let i = 0; i < nums.length; i++)
    {
        if (dict.hasOwnProperty(nums[i]))
        {
            dict[nums[i]] = dict[nums[i]] + 1 ;
            if(dict[nums[i]] > (nums.length/2))
            {
                return nums[i] ;
            }
        }
        else
        {
            dict[nums[i]] = 1;
        }
    }
}