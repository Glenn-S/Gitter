REM Credit - Chris Garrett: https://github.com/chris-garrett
@echo off

if ["%*"] == [""] (
    internals\task\task.exe -l
) else (
    internals\task\task.exe %*
)
