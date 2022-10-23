# Part 2

### Q1
  A: It will print out "3", this is because it still has access to the i variable
  which was declared using var keyword making it accessable to anything in the function
  scope and since console.log(i) is within this scope it will print out 3 because that 
  was the last value of i since that is the size of the inputed list.
  
### Q2
  A: It will print out "150", this is still has access to variable discountedPrice 
  scope because we used var to declare it. Then it get the number 150 from applying
  the 0.5 discount to the last item in the list with is 300 which is going to be the
  value it holds.
  
### Q3
  A: First off it will print out because variable finalPrice is in the scope
  of print statement since we used var to declare it. But it will actually print
  "150" because that variable remember its last value in the for loop which was 
  150.
  
### Q4 
  A: The function will return the list discounted which correctly has all the discounted
  prices. This is how the list will look like, [50,100,150]. Has no problem returning all
  var variables are used correctly. 
    
### Q5
  A: It will cause an error because i is out of scope now for the print statement. The 
  variable i is only in scope for the for loop.
  
### Q6
  A: It will cause an error because discountedPrice is out of scope now for the print 
  statement. The variable discountedPrice is only in scope for the for loop.
 
### Q7
  A: It will print out "150", this is because variable finalPrice is still in scope
  since it was defined inside the function, although it uses let, still has scope for
  the whole function.
  
### Q8 
  A: The function will return the list discounted which correctly has all the discounted
  prices. This is how the list will look like, [50,100,150]. Has no problem returning all
  let variables are used correctly. 
  
### Q9
  A: First off give us an error because we trying to change const dicountedPrices
  variable in the for loop before we even get this is print statement. However even
  if we were ignoring that problem there would still be an error because we are trying 
  to use a variable that is out of scopeof it's block still uses the let keyword to 
  describe it. 
  
### Q10
  A: First off give us an error because we trying to change const dicountedPrices
  variable in the for loop before we even get this is print statement. However if
  we were ignoring that problem, it will print out "3" since length still has scope in
  the function although it used const, and we did not try to change it value, so no 
  errors either. But if won't do this because of the previous error described before.
  
### Q11
  A: It will give us an error. This is because although the const declaration of the 
  discountedPrice variable is valid, the function itself is wrong. Due to the fact that
  in the for loop the function tries to push into the discounted list, when it was declared
  using a const keyword meaning it can not be changed, and when we try to do this function 
  will just spit out an error. 
  
