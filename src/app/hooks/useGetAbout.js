// import { useState, useEffect, useCallback, useRef } from "react";
// import { getAbout } from "@/lib/api";

// const useGetAbout = () => {
//     const [about, setAbout] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const abortControllerRef = useRef(null);

//     const fetchExperience = useCallback(async () => {
//         if (abortControllerRef.current) {
//             abortControllerRef.current.abort();
//         }

//         abortControllerRef.current = new AbortController();

//         try {
//             setLoading(true);
//             setError(null);

//             const res = await getAbout();
//             setAbout(res.about)
//         } catch (error) {

//         }
//     })
// }
