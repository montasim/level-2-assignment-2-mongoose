## Questions:

1. What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

   Answer: Using model we can define the structure of the collection. We can validate data such as maximum, minimum value. Also can add default value and also can manage relationship between collection

<br/>

2. Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

   Answer: Using find we can filter data such as 

   ```
   db.books.find({ author: "montasim"})
   ``` 
   
   also we can filter using $match such as 
   
   ```
   db.books.aggregate(
    [ 
        { $match: { price: { $lt: 50 } } }, 
        { $project: { title: 1, author: 1, _id: 0 } } 
    ])
   ```
   And by using project we can definded which field will show and which will not 
   
   ```
   db.books.find({}, { title: 1, author: 1 })
   ```

    in previous example we use project for filtering property while using aggregate framework. 

<br/>

3.  What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

    Answer: 
    ```
    import { Schema, model, connect } from 'mongoose'; 
    
    interface IUser { 
        username: string; 
        email: string; 
        profilePicUrl?: string; 
    } 
    
    const userSchema = new Schema<IUser>({ 
        username: { type: String, required: true }, 
        email: { type: String, required: true }, 
        profilePicUrl: String 
    }); 
        
    userSchema.methods.getUsername = function() { 
        return this.username; 
    }; 
    
    const User = model<IUser>('User', userSchema); 
    
    run().catch(err => console.log(err)); 
    
    async function run() { 
        await connect('mongodb://127.0.0.1:27017/test'); 
        const user = new User({ 
            username: 'montasim', 
            email: 'montasim@somemail.com', 
            profilePicUrl: '/upload/profilePic/montasim' 
        }); 
        
        await user.save(); 
        
        console.log(user.getFullName()); 
    } 
    ```
    => using getFullName() instance function we get property of can get desired data from a document.

<br/>

4. How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

   Answer: 
   ```
    "$ne" => not equal => db.users.find({ 
        age: { $ne: 30 } 
    }); 
    
    "$gt" => greater than => db.products.find({ 
        price: { $gt: 50 } 
    }); 
    
    "$lt" => less than => db.products.find({ 
        price: { $lt: 100 } 
    }); 
    
    "$gte" => greater than or equal to => db.orders.find({ 
        quantity: { $gte: 10 } 
    }); 
    
    "$lte" => less than or equal to => db.orders.find({ 
        total: { $lte: 1000 } 
    }); 

<br/>

5.  What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

    Answer: 
    
    - $in operator select documents which properties are equal to specified values in the array. 
    - $nin operator select documents which properties are not equal to specified values in the array.

<br/>
<br/>
<br/>

## Extra Questions:

6.  Explain the logical operators "$and," "$or," "$not," and "$nor" in MongoDB queries. Provide examples to demonstrate their usage.

    Answer: 

<br/>

7.  What is the difference between the "explicit" and "implicit" "$and" operations in MongoDB? How does each behave when combining multiple conditions?

    Answer: 

<br/>

8.  How do you use the "$exists" operator in MongoDB to check if a field exists or not in a document? Provide an example.

    Answer: 

<br/>

9.  What is the purpose of the "$type" operator in MongoDB? How can you use it to match documents based on the data type of a field?

    Answer: 

<br/>

10.  Explain the use of the "$size" operator in MongoDB. How does it work when querying documents based on the size of an array field?

    Answer: 

<br/>
<br/>
<br/>

<!-- connect with me start -->
<div align="center"> 
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&duration=1&pause=1000&repeat=false&width=410&lines=%F0%9F%93%AA+%F0%9D%97%99%F0%9D%97%98%F0%9D%97%98%F0%9D%97%9F+%F0%9D%97%99%F0%9D%97%A5%F0%9D%97%98%F0%9D%97%98+%F0%9D%97%A7%F0%9D%97%A2+%F0%9D%97%96%F0%9D%97%A2%F0%9D%97%A1%F0%9D%97%A7%F0%9D%97%94%F0%9D%97%96%F0%9D%97%A7+%F0%9D%97%A0%F0%9D%97%98+%F0%9D%97%94%F0%9D%97%A1%F0%9D%97%AC%F0%9D%97%A7%F0%9D%97%9C%F0%9D%97%A0%F0%9D%97%98" alt="Typing SVG" />
</div>

<br/>

<!-- social media links start -->
<table align="center">
  <thead align="center">
      <tr>
          <th>
              <a href="https://www.linkedin.com/in/montasim">
                  <img alt="linkedin icon" src="https://cdn.simpleicons.org/linkedin" width="35px">
              </a>
          </th>
          <th>
              <a href="https://www.github.com/montasim">
                  <img alt="github icon" src="https://cdn.simpleicons.org/github/white" width="35px">
              </a>
          </th>
          <th>
              <a href="https://stackoverflow.com/users/20348607/montasim">
                  <img alt="github icon" src="https://cdn.simpleicons.org/stackoverflow" width="35px">
              </a>
          </th>
          <th>
              <a href="https://montasim-dev.web.app/">
                  <img alt="web icon" src="https://cdn.simpleicons.org/googlechrome" width="35px">
              </a>
          </th>
          <th>
              <a href="mailto:montasimmamun@gmail.com">
                  <img alt="gmail icon" src="https://cdn.simpleicons.org/gmail" width="35px">
              </a>
          </th>
          <th>
              <a href="https://www.facebook.com/montasimmamun/">
                  <img alt="facebook icon" src="https://cdn.simpleicons.org/facebook" width="35px">
              </a>
          </th>
          <th>
              <a href="https://twitter.com/montasimmamun">
                  <img alt="facebook icon" src="https://cdn.simpleicons.org/twitter" width="35px">
              </a>
          </th>
      </tr>
  </thead>
</table>
<!-- social media links end -->
<!-- connect with me end -->
