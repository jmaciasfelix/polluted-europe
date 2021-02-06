//services
import { filterGreaterThan } from "../services/table";
//components
import { SliderFilter } from "../components/SliderFilter";

export const columnsTable = [
  {
    Header: "Rank",
    accessor: "rank",
    Filter: "",
  },
  {
    Header: "Cities",
    accessor: "city",
    Filter: "",
  },
  {
    Header: "Index polluted",
    accessor: "pollutionIndex",
    Filter: SliderFilter,
    filter: filterGreaterThan,
  },
];
