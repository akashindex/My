#!/bin/bash

# Start and end dates
start_date="2022-08-03 00:00:00"
end_date="2024-08-05 00:00:00"

# Define a list of random words for commit messages
words=("refactor" "fix" "update" "optimize" "cleanup" "enhance" "test" "improve" "debug" "add" "remove" "merge")

# Convert start_date and end_date to seconds since epoch
start_date_epoch=$(date -d "$start_date" +"%s")
end_date_epoch=$(date -d "$end_date" +"%s")

# Set the total number of commits to make (adjustable)
total_commits=500

for i in $(seq 1 $total_commits); do
    # Generate a random timestamp between start_date and end_date
    random_date_epoch=$((start_date_epoch + RANDOM % (end_date_epoch - start_date_epoch + 1)))
    random_date=$(date -d "@$random_date_epoch" +"%Y-%m-%d %H:%M:%S")

    # Select a random word for the commit message
    random_word=${words[$RANDOM % ${#words[@]}]}

    # Modify a file for each commit
    echo "Random Commit #$i on $random_date" >> commit_log.txt
    git add commit_log.txt

    # Commit with the random date and message
    GIT_AUTHOR_DATE="$random_date" GIT_COMMITTER_DATE="$random_date" git commit --no-edit --date="$random_date" -m "$random_word"
done

# Push all commits to the repository at once
git push origin main --force
