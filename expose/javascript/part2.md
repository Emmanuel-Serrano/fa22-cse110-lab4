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
  
### Q12
  A: <br>
  (A) - student.name; <br>
  (B) - student['Grad Year']; <br>
  (C) - student.greeting(); <br>
  (D) - student['Favorite Teacher'].name; <br>
  (E) - student['courseLoad'][0]; <br>
  
### Q13
  A: <br>
  (A) - output: '32'. This output was given becuase the int 3 maps to its exact string representation
         so when we add 3 + '2' it will concatenate the strings '3' + '2' which is why we have
         that output. <br>
  (B) - output: 1. This output was given because the string '3' maps to its exact int representation
        so when we subtract '3' - 2 it will just turn '3' to an int and then perform the operation
        giving us that output. <br>
  (C) - output: 3. This output was given because null maps to false which means it also maps to 
        0 as an int representation so when we say 3 + null it will just turn null to 0 and then 
        perform the operation giving us that output. <br>
  (D) - output: '3null'. This output was given because null maps to its literally string 'null' so that
        means when we say '3' + null it will just concatenate the two strings '3' and 'null' together 
        giving us the output. <br>
  (E) - output: 4. This output was given because true maps to its int value of 1 so that means when we say 
        3 + true it will just have true be the value of 1 and perform the operation giving us that output. <br>
  (F) - output: 0. Since both these map to 0, and we using the addition operation computer using their ints 
        equivalent of 0 for both. So its perform the operation 0 + 0 and giving us that output. <br>
  (G) - output: '3undefined'.This was the output given because when we undefined can map to its literally string
        'undefined' so when we say '3' + undefined it will concatenate the two strings versions, giving us 
        that output. <br>
  (H) - output: NaN. We get this output because we are trying to do a subtraction we two int and will try to 
        turn undefined into a int. However undefined does not map to any int so it gives us the output NaN which
        means Not-a-Number. <br>
  
  ### Q14
  A: <br>
  (A) - output: true. Since we can map the string '2' to its literally int 2. We are just making the straight comparsion
        of 2 > 1, giving us the output true. <br>
  (B) - output: false. Since these are both already strings we do not have to map to anything different. So when we compare 
        character by charater, '2' > '1' in terms of characters, so '2' > '12' which is why we have an output of false. <br>
  (C) - output: true. Since 2 maps to literally string '2', and likewise the other way around it just can make the comparsion
        2 == 2, which is why we have an output of true. <br>
  (D) - output: false. Since the operator '===' is a strict operator it will not convert anything, so when we compare two different
        types it won't try to make, giving the output false. <br>
  (E) - output: false. Since true maps to the int 1, we do the comparsion 1 == 2, which gives us the output false. <br>
  (F) - output: true. Since we convert manually 2 to it boolean value of true, since any position int is considered true in boolean
        value we the comparsion true === true, giving the output true. <br>
        
  ### Q15
  A: '===' is a strict operator meaning it will not convert the types to match if they are indeed different, while '==' on the 
  other hand is not strict operator meaning it will convert the types to the same type if it can and then compare the two values. 
  
  ### Q16
  Look at file
  
  ### Q17
  A: So basically what this function does is given the array it will call the callback function on each index of the array. Since the 
  function 'doSomething' multiplies the incoming num by two, when we run the code showed it will return an array with all the values 
  in it now being doubled. i.e. [2,4,6] from [1,2,3]. 
  
  ### Q18
  Look at file
  
  ### Q19
  A: <br>
  1<br>
  4<br>
  3<br>
  2<br>
  
  
  
  
