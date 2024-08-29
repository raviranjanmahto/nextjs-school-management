const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-mahtoSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">New Office Hours</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Starting next month, the office will open at 9:00 AM and close at
            6:00 PM. Please plan your schedules accordingly.
          </p>
        </div>
        <div className="bg-mahtoPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Quarterly Meeting</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-15
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            The next quarterly meeting will be held on September 15th at 10:00
            AM in the main conference room. All team members are expected to
            attend.
          </p>
        </div>
        <div className="bg-mahtoYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Holiday Schedule</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-12-25
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Please note that the office will be closed from December 24th to
            January 2nd for the holiday season. We wish everyone a happy
            holiday!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
