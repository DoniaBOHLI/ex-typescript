import { fetchData } from "./mockApi";

async function getData(): Promise<void> {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();