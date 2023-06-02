import { useEffect } from "react"

const useTitle = title => {
	useEffect(()=>{
		document.title = `${title} - Healthy food`;
	}, [title])
}

export default useTitle;