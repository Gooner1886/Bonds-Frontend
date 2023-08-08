import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './wishlist.css'


const App = () => {
   const [wishlistItems, setWishlistItems] = useState([]);

  {/*const wishlistItems = [
    {"id":1,"Bondname":"Samsung"},
    {"id":2,"Bondname":"Oracle"},
    {"id":3,"Bondname":"Microsoft"},
    {"id":4,"Bondname":"Bisleri"},
    {"id":5,"Bondname":"Taj"},
    {"id":6,"Bondname":"fresco"},
  ]
*/}

   useEffect(() => {
    // Fetch the user's wishlist when the component mounts
    fetchWishlist();
  }, []);

  const fetchWishlist = () => {
    // Replace 'YOUR_BACKEND_API_URL' with the actual API endpoint to fetch the wishlist
    axios.get('YOUR_BACKEND_API_URL')
      .then((response) => {
        setWishlistItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching wishlist:', error);
      });
  };


  const handleRemoveFromWishlist = (itemId) => {
    // Replace 'YOUR_BACKEND_API_URL' with the actual API endpoint to remove an item from the wishlist
    axios.delete(`YOUR_BACKEND_API_URL/${itemId}`)
      .then((response) => {
        fetchWishlist(); // Fetch the updated wishlist after removing an item
      })
      .catch((error) => {
        console.error('Error removing item from wishlist:', error);
      });
  };


  return (
      <div className="wishlist-container">
        <h2>My Wishlist</h2>
        {wishlistItems.map((item) => (
        <div className='item-container'>
              {item.Bondname}
              <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
        </div>
          ))}
      </div>
  );
};

export default App;
