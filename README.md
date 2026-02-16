I have strted a newp roject # calendar_css
This calendar should look a different way nearly to App.

Here i'll try to use the other way of coding, so make html structure using container wrappers.
So the main div whrapper centers entire calendar.
The header of calendar contains 2 buttons to navigate left and right beeatween month (for future JS code).
Calendar grid set of 7 columns (week days), has also an empty cell/div container for proper day of week setting.

CSS sheet starts with global settings * {
    browser defaults
}
then body general settings {
    using dvh units for viewport; center the block; background
}
calendar container settings: rounded corners, background, box shadow, padding set in rem units.
calendar header {
    flex spreads buttons and h1 apart
}
navigation buttons rounded, hover with transition applied

calendar grid centered with grid settings for gaps used rem unit

