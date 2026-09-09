import { useState, useEffect } from "react";

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  function handleSaveClick() {
    console.log(`✅ Progress Saved!`);
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save Progress" : "Reconnecting..."}
    </button>
  );
}

/**
 * disabled = {isOnline}
 * is online - true - disabled - true
 * is online - false - disabled - false
 *
 * disabled = {!isOnline}
 * is onlime = true - !isOnline = false - disabled = false
 * isOnline = false - !isOnline = true - disabled = true
 */
