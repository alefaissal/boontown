const { ApolloError } = require("apollo-server");

module.exports = { 
  User: {
    async items({id}, args, {pgResource}, info) {
     try{ const items = await pgResource.getItemsForUser(id);
      return items;
    }catch(e){
      throw "Now items for this user";
    }
  },
      async borrowed({id}, args, {pgResource}, info) {
        try{
          const itemsBorrowed = await pgResource.getBorrowedItemsForUser(id);
          return itemsBorrowed;
        }catch(e){
          throw "No items borrowed by this user";
        }  
      }
  },

  Item: {
    async itemowner(item, args, {pgResource}, info) {
      try{
        const owner = await pgResource.getUserById(item.itemowner);

				console.log(owner)
        return owner;
    
      }catch (e){
        throw "Now owner for this item";
      }
    },
    async tags({id}, args, {pgResource}, info) {
      try{
        const tags = await pgResource.getTagsForItem(id);
        return tags; 
      }catch(e){
        throw "No tags to return";
      }
    },
    async borrower(item, args, {pgResource}, info) {
      try{
        const userBorrower = await pgResource.getBorrowedItemsForUser(item.borrower);
        return userBorrower;
      }catch(e){
        throw "No user borrow this item";
      }  
    }
  },
};

