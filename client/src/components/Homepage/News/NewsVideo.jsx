import { useEffect, useState, useContext } from "react";
import YouTube from "react-youtube";
import { putApi } from "../../../services/api";
import { globalContext } from "../../../store/context";

const NewsVideo = ({ videoid }) => {
  const context = useContext(globalContext);
  const logs = context.state.dailyEventsLog;
  const videoStatus = context.state.videoStatus;
  const pointStatus = context.state.point.status;
  const [participateStatus, setParticipateStatus] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    logs.forEach((item) => {
      if (item.method === "Watched_Video") {
        context.dispatch({ type: "VIDEO", status: true });
      }
    });
  }, [logs, pointStatus]);

  const handleComplete = async () => {
    if (isLoggedIn) {
      try {
        if (videoStatus) return;
        await putApi("point", {
          action_type: "Earned",
          method: "Watched_Video",
        });

        context.dispatch({
          type: "POINT",
          name: "status",
          value: !pointStatus,
        });

        setParticipateStatus(participateStatus + 1);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const opts = {
    width: "640",
    height: "360",
    playerVars: {
      controls: 1,
      disablekb: 1,
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="flex-col lg:flex-row md:h-full md:h-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center">
      <div className="md:h-full h-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <YouTube
          className="w-full"
          videoId={videoid}
          opts={opts}
          onEnd={handleComplete}
        />

        {isLoggedIn && (
          <div
            className={`inline-flex items-center mt-3 px-3 py-2 text-sm font-large text-center text-white rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-blue-800 ${
              videoStatus
                ? "bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                : "bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
            }`}
          >
            {videoStatus ? "시청 완료" : "시청 전"}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsVideo;
