import { useEffect, useState, useContext } from "react";
import { dataSet } from "../../data/data";
import Card from "../Global/Card";
import { putApi } from "../../services/api";
import { GlobalContext } from "../../store/Context";

const DailySpecies = () => {
  const [selectedSpecies, setSelectedSpecies] = useState([]);

  const context = useContext(GlobalContext);
  const logs = context.state.dailyEventsLog;
  const SpeciesStatus = context.state.dailySpeciesStatus;
  const pointStatus = context.state.point.status;
  const isLoggedIn = context.state.isLoggedIn;

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const storedDate = localStorage.getItem("Date");
    const storedSpecies = localStorage.getItem("DailySpecies");

    if (storedDate !== today || !storedDate) {
      const newSelectedSpecies = getRandomSpecies(dataSet, 4);
      setSelectedSpecies(newSelectedSpecies);
      localStorage.setItem("DailySpecies", JSON.stringify(newSelectedSpecies));
      localStorage.setItem("Date", today);
    } else if (storedSpecies) {
      setSelectedSpecies(JSON.parse(storedSpecies));
    }
  }, []);

  const getRandomSpecies = (dataSet, count) => {
    const speciesCount = dataSet.length;
    const selectedIds = new Set();

    while (selectedIds.size < count) {
      const randomIndex = Math.floor(Math.random() * speciesCount);
      const randomId = dataSet[randomIndex].id;
      selectedIds.add(randomId);
    }

    const selectedSpecies = dataSet.filter((item) => selectedIds.has(item.id));
    return selectedSpecies;
  };

  const [participateStatus, setParticipateStatus] = useState(0);

  useEffect(() => {
    logs.forEach((item) => {
      if (item.method === "Watched_Daily_Species1") {
        context.dispatch({
          type: "DAILYSPECIES",
          name: "species1",
          status: true,
        });
      } else if (item.method === "Watched_Daily_Species2") {
        context.dispatch({
          type: "DAILYSPECIES",
          name: "species2",
          status: true,
        });
      } else if (item.method === "Watched_Daily_Species3") {
        context.dispatch({
          type: "DAILYSPECIES",
          name: "species3",
          status: true,
        });
      } else if (item.method === "Watched_Daily_Species4") {
        context.dispatch({
          type: "DAILYSPECIES",
          name: "species4",
          status: true,
        });
      }
    });
  }, [logs, pointStatus]);

  const handleSpecies = async (id) => {
    if (isLoggedIn) {
      if (SpeciesStatus[`species${id}`]) return;
      await putApi("point", {
        action_type: "Earned",
        method: `Watched_Daily_Species${id}`,
      });

      context.dispatch({
        type: "POINT",
        name: "status",
        value: !pointStatus,
      });

      setParticipateStatus(participateStatus + 1);
    }
  };

  return (
    <div>
      <div className=" mt-20 text-3xl font-semibold">
        🐰 오늘의 멸종위기종을 알아볼까요?
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-lg font-medium">
        {selectedSpecies.map((item, index) => (
          <div key={item.id} onClick={() => handleSpecies(index + 1)}>
            <Card
              id={item.id}
              name={item.name}
              region={item.region}
              degree={item.degree}
              species={item.species}
              imageLink={`endangered/${item.id}.jpg`}
              link={item.link}
            />
            <div className="flex justify-end">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-3 py-1.5 pt-2.5 text-sm font-large text-center text-white rounded-lg focus:ring-[0.2rem] focus:outline-none dark:focus:ring-blue-800 ${
                  SpeciesStatus[`species${index + 1}`]
                    ? "bg-[#85B7CC] hover:bg-[#3B82A0] focus:ring-[#BBDCE8] dark:bg-blue-600 dark:hover:bg-blue-700"
                    : "bg-[#CD9894] hover:bg-[#A36560] focus:ring-[#F2CDCA] dark:bg-red-600 dark:hover:bg-red-700"
                }`}
              >
                {SpeciesStatus[`species${index + 1}`] ? "완료" : "알아보기"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySpecies;
