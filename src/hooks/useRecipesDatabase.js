import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import referencedCollection from "../firebase/firebaseConfig";
function useRecipesDatabase() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        let data = await getDocs(referencedCollection);
        let arrivedDocs = [];

        for (let i = 0; i < data.docs.length; i++) {
          arrivedDocs.push(data.docs[i].data());
        }

        arrivedDocs.sort((a, b) => Number(a.id) - Number(b.id));

        !cancelled && setData(arrivedDocs);
      } catch (e) {
        !cancelled && setError(e.message);
      } finally {
        !cancelled && setIsPending(false);
      }
    })();
    return () => {
      setCancelled(true);
    };
  }, []);

  return { data, isPending, error };
}

export default useRecipesDatabase;
