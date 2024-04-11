import React, { useState } from "react";
import { Box, Heading, Button, Switch, Alert, AlertIcon } from "@chakra-ui/react";

const Widgets = () => {
  const [widgets] = useState([
    { id: 1, title: "Widget 1", isToggled: false, alertMessage: "Alert from Widget 1" },
    { id: 2, title: "Widget 2", isToggled: false, alertMessage: "Alert from Widget 2" },
    { id: 3, title: "Widget 3", isToggled: false, alertMessage: "Alert from Widget 3" },
    { id: 4, title: "Widget 4", isToggled: false, alertMessage: "Alert from Widget 4" },
    { id: 5, title: "Widget 5", isToggled: false, alertMessage: "Alert from Widget 5" },
  ]);

  const [alerts, setAlerts] = useState([]);

  const handleButtonClick = (alertMessage) => {
    setAlerts([...alerts, { message: alertMessage }]);
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
      {alerts.map((alert, index) => (
        <Alert key={index} status="info" mb={2}>
          <AlertIcon />
          {alert.message}
        </Alert>
      ))}
    </Box>
  );
};

export default Widgets;
