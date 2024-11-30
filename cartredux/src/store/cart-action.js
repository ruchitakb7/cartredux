import { showNotification } from "./ui-slice";
import { replaceCart,addItem,removeItem } from "./cartReducer";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://cartredux-e3e2e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );
      if (!res.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const resData = await res.json();
      return resData;
    };
    try {
      const cartData = await fetchData();
      dispatch(replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }))
    } catch (error) {
      dispatch(
        showNotification({
          status: "Error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
    console.log(cart)
  return async(dispatch) => {
    dispatch(
      showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://cartredux-e3e2e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cart: cart,
            totalQuantity: cart.totalQuantity
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Sending cart data failed");
      }
      const resData = await res.json();
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "Success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
      
    } catch (error) {
      dispatch(
        showNotification({
          status: "Error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};