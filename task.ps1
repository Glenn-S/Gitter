
if ($args.Count) {
    Start-Process -NoNewWindow -FilePath "internals/task/task.exe" -ArgumentList $args -Wait
}
else {
    Start-Process -NoNewWindow -FilePath "internals/task/task.exe" -Wait
}
