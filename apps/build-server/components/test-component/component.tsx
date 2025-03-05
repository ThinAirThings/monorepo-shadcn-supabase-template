import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NotificationSection } from './component-mod';

const BasicComponent = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader className="bg-slate-50">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold">Demo Component</CardTitle>
            <Badge variant="outline" className="bg-blue-50">New</Badge>
          </div>
          <CardDescription>A simple example using shadcn/ui and Tailwind</CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6 space-y-6">
          <p className="text-slate-600">
            This is a basic demonstration of a React component styled with Tailwind CSS
            and using shadcn/ui component library.
          </p>

          <NotificationSection 
            type="success"
            title="Component Loaded"
            description="The compound component has been successfully integrated."
          />
          
          <div className="bg-blue-50 p-4 rounded-md border border-blue-100 text-sm">
            <p className="font-medium text-blue-800">Tailwind CSS Tips:</p>
            <ul className="list-disc ml-5 mt-2 text-blue-700 space-y-1">
              <li>Use utility classes for responsive design</li>
              <li>Combine with shadcn/ui for pre-built components</li>
              <li>Customize theme in your tailwind.config.js</li>
            </ul>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t pt-6 mt-2">
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BasicComponent;