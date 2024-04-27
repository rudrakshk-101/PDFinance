"use client";
// components/component.tsx

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F2zV4RzZiao
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState } from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { Progress } from "@/components/ui/progress";

interface Props {
  className?: string;
}

export default function Component() {
  return (
    <main className="flex flex-col gap-8 p-6 md:p-8 lg:p-10">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <UploadIcon className="h-4 w-4" />
                Upload CSV
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="sm" variant="outline">
                    <FilterIcon className="h-4 w-4" />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rent">Rent</SelectItem>
                          <SelectItem value="groceries">Groceries</SelectItem>
                          <SelectItem value="utilities">Utilities</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="entertainment">Entertainment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" variant="outline">
                      Apply Filters
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardHeader>
          <CardContent>
            <LineChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Monthly Income</CardTitle>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <UploadIcon className="h-4 w-4" />
                Upload CSV
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="sm" variant="outline">
                    <FilterIcon className="h-4 w-4" />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="source">Source</Label>
                      <Select>
                        <SelectTrigger id="source">
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salary">Salary</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                          <SelectItem value="investments">Investments</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" variant="outline">
                      Apply Filters
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardHeader>
          <CardContent>
            <BarChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Financial Goals</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>Savings Goal</div>
              <div className="flex items-center gap-2">
                <Input className="w-20" defaultValue={5000} type="number" />
                <Progress className="flex-1" value={75} />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>Debt Repayment</div>
              <div className="flex items-center gap-2">
                <Input className="w-20" defaultValue={10000} type="number" />
                <Progress className="flex-1" value={50} />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>Retirement Contribution</div>
              <div className="flex items-center gap-2">
                <Input className="w-20" defaultValue={500} type="number" />
                <Progress className="flex-1" value={80} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <PlusIcon className="h-4 w-4" />
                Add New Goal
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Savings Goal</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold">$5,000</div>
              <div className="text-gray-500">/ $10,000</div>
            </div>
            <Progress value={50} />
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <FileEditIcon className="h-4 w-4" />
                Edit Goal
              </Button>
              <Button className="text-red-500 hover:bg-red-500 hover:text-white" size="sm" variant="outline">
                <TrashIcon className="h-4 w-4" />
                Delete Goal
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Debt Repayment</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold">$10,000</div>
              <div className="text-gray-500">/ $20,000</div>
            </div>
            <Progress value={50} />
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <FileEditIcon className="h-4 w-4" />
                Edit Goal
              </Button>
              <Button className="text-red-500 hover:bg-red-500 hover:text-white" size="sm" variant="outline">
                <TrashIcon className="h-4 w-4" />
                Delete Goal
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Retirement Contribution</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold">$500</div>
              <div className="text-gray-500">/ $1,000</div>
            </div>
            <Progress value={50} />
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <FileEditIcon className="h-4 w-4" />
                Edit Goal
              </Button>
              <Button className="text-red-500 hover:bg-red-500 hover:text-white" size="sm" variant="outline">
                <TrashIcon className="h-4 w-4" />
                Delete Goal
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}




import React from 'react';
// import { ResponsiveBar } from '@nivo/bar'; 

// Define the type for the data used in the ResponsiveBar component
interface BarChartData {
 name: string;
 count: number;
}

// Define the type for the props of the BarChart component
// Since it doesn't use any specific props, we'll just use React's built-in HTMLAttributes
interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {}

const BarChart: React.FC<BarChartProps> = (props) => {
 return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
 );
};

// export default BarChart;




function LineChart({ className }: Props) {
  return (
    <div className={className}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PlusIcon(props: React.SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function FileEditIcon(props: React.SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function FilterIcon(props: React.SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function UploadIcon(props: React.SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
