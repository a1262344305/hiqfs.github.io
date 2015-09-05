#!/bin/bash
cd ../other
echo "" > index.html
cat ../Template/IndexTemplate.html >> index.html
for f in `ls `; do
  stat -c "%y <si>%s</si>" $f >> index.html
  echo "<a href=./"$f">"$(ls $f) >> index.html
  echo "</a><br>" >> index.html
done
cat ../Template/IndexTemplateFooter.html >> index.html
