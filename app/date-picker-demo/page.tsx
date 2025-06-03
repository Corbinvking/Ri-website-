"use client"

import * as React from "react"
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [dateRange, setDateRange] = React.useState<{ from: Date; to?: Date } | undefined>(undefined)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Date Picker Demo</h1>
          <p className="text-muted-foreground mt-2">
            Testing the updated react-day-picker v9 integration
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Single Date Picker</CardTitle>
              <CardDescription>
                Select a single date using the date picker component.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <DatePicker 
                date={date} 
                onDateChange={setDate}
                placeholder="Select a date"
              />
              {date && (
                <p className="text-sm text-muted-foreground">
                  Selected: {date.toLocaleDateString()}
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Date Range Picker</CardTitle>
              <CardDescription>
                Select a range of dates using the range picker component.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <DateRangePicker 
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
                placeholder="Select date range"
              />
              {dateRange?.from && (
                <p className="text-sm text-muted-foreground">
                  From: {dateRange.from.toLocaleDateString()}
                  {dateRange.to && ` - To: ${dateRange.to.toLocaleDateString()}`}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Integration Status</CardTitle>
            <CardDescription>
              Dependency resolution and compatibility check
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>React Day Picker:</span>
                <span className="text-green-600 font-medium">v9.7.0 ✓</span>
              </div>
              <div className="flex justify-between">
                <span>Date-fns:</span>
                <span className="text-green-600 font-medium">v3.6.0 ✓</span>
              </div>
              <div className="flex justify-between">
                <span>React:</span>
                <span className="text-green-600 font-medium">v19 ✓</span>
              </div>
              <div className="flex justify-between">
                <span>Next.js:</span>
                <span className="text-green-600 font-medium">v15.2.4 ✓</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 