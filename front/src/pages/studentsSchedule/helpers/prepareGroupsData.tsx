import { RespondeGroupsData } from "../types/types";
import { GROUPS } from "./shedule";


export default function prepareGroupsData(){
  const result = JSON.parse(GROUPS).map((element: RespondeGroupsData) => {
      return{
        name: element.Name,
        idGroup: element.IdGroup
      };
  });
  return result
}
