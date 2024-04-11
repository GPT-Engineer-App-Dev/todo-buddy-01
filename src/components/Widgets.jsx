import React, { useState } from "react";
import { Box, Heading, Button, Switch, Alert, AlertIcon, useTimeout } from "@chakra-ui/react";

const Widgets = () => {
  const [widgets] = useState([
    { id: 1, title: "Widget 1", isToggled: false, alertMessage: "Alert from Widget 1" },
    { id: 2, title: "Widget 2", isToggled: false, alertMessage: "Alert from Widget 2" },
    { id: 3, title: "Widget 3", isToggled: false, alertMessage: "Alert from Widget 3" },
    { id: 4, title: "Widget 4", isToggled: false, alertMessage: "Alert from Widget 4" },
    { id: 5, title: "Widget 5", isToggled: false, alertMessage: "Alert from Widget 5" },
  ]);

  const [alerts, setAlerts] = useState([]);
  const [alertTimeout] = useState(3000);

  const removeAlert = (alertId) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== alertId));
  };

  const handleButtonClick = (alertMessage) => {
    const newAlert = { id: Date.now(), message: alertMessage };
    setAlerts([...alerts, newAlert]);
    useTimeout(() => removeAlert(newAlert.id), alertTimeout);
  };

  return (
    <Box mt={8}>
      <Heading size="lg" mb={4}>
        Widgets
      </Heading>
      {widgets.map((widget) => (
        <Box key={widget.id} p={4} borderWidth={1} borderRadius="md" mb={4}>
          <Heading size="md" mb={2}>
            {widget.title}
          </Heading>
          <Switch isChecked={widget.isToggled} mb={2} />
          <Button colorScheme="blue" onClick={() => handleButtonClick(widget.alertMessage)}>
            Trigger Alert
          </Button>
        </Box>
      ))}
      {alerts.map((alert) => (
        <Box key={alert.id} position="fixed" bottom={0} right={0} m={4} zIndex={9999}>
          <Alert status="info" transition="all 0.3s ease-in-out">
            <AlertIcon />
            {alert.message}
          </Alert>
        </Box>
      ))}
    </Box>
  );
};

export default Widgets;
