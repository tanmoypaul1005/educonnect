import { TabsContent } from '@/components/ui/tabs';
import { CheckCheck } from 'lucide-react';
import React from 'react';

const Overview = () => {
    return (
        <TabsContent value="overview">
        {/* each tab content can be independent component */}
        <>
          <h3 className="text-2xl ">Course Description</h3>
          <p className="mt-4">
            This tutorial will help you learn quickly and thoroughly.
            Lorem ipsum, or lipsum as it sometimes known, is dummy text
            used in laying out print, graphic or web designs. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
            <br /> <br /> You’ll be exposed to principles and
            strategies, but, more importantly, you’ll learn how actually
            apply these abstract concepts by coding three different
            websites for three very different the audiences. Lorem ipsum
            is dummy text used in laying out print, graphic or web
            designs Lorem ipsum blinding shot chinwag knees.
          </p>
          <div className="p-8 mt-8 space-y-6 rounded-md bg-gray-50">
            <h4 className="text-2xl">What You will Learn?</h4>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <li className="flex space-x-3">
                <div className="relative flex-none top-1">
                  <CheckCheck />
                </div>
                <div className="flex-1">
                  Learn how perspective works and how to incorporate
                  your art
                </div>
              </li>
              <li className="flex space-x-3">
                <div className="relative flex-none top-1">
                  <CheckCheck />
                </div>
                <div className="flex-1">
                  Learn how perspective works and how to incorporate
                  your art
                </div>
              </li>
              <li className="flex space-x-3">
                <div className="relative flex-none top-1">
                  <CheckCheck />
                </div>
                <div className="flex-1">
                  Learn how perspective works and how to incorporate
                  your art
                </div>
              </li>
              <li className="flex space-x-3">
                <div className="relative flex-none top-1">
                  <CheckCheck />
                </div>
                <div className="flex-1">
                  Learn how perspective works and how to incorporate
                  your art
                </div>
              </li>
            </ul>
          </div>
        </>
      </TabsContent>
    );
};

export default Overview;