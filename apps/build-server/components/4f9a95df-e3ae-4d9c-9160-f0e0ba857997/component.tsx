import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WeatherCard: React.FC = () => {
  return (
    <Card className="max-w-sm mx-auto bg-blue-500 text-white shadow-lg rounded-lg">
      <CardHeader className="p-4">
        <h2 className="text-xl font-semibold">Weather Today</h2>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold">72°F</p>
            <p className="text-sm">Sunny</p>
          </div>
          <div className="text-right">
            <p className="text-sm">Humidity: 45%</p>
            <p className="text-sm">Wind: 5 mph</p>
          </div>
        </div>
        <Button className="mt-4 bg-white text-blue-500 hover:bg-blue-100">See Forecast</Button>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
