import { useEffect, useState } from "react";
import referencedCollection from "../firebase/firebaseConfig";
import { query, where, getDocs } from "firebase/firestore";

function useRecipeDataById(id) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // Create a query against the collection
        // const q = query(referencedCollection, where("id", "==", "1"));

        const q = query(referencedCollection, where("id", "==", id));

        // Execute the query

        setIsPending(true);
        const querySnapshot = await getDocs(q);
        !cancelled && setData(querySnapshot.docs[0].data());

        // console.log(querySnapshot.docs[0].data());
      } catch (e) {
        !cancelled && setError(e.message);
      } finally {
        !cancelled && setIsPending(false);
      }
    })();

    return () => setCancelled(true);
  }, [id]);

  return {
    data,
    isPending,
    error,
  };
}

export default useRecipeDataById;
