#!/bin/bash

#find . -name "*.html" -exec html2markdown {} > {}.md \;

find . -type f -name "*.md" | while read fname
 do	
       tail -4 	${fname} > ${fname}.txt
       cat ${fname} >> ${fname}.txt
       rm ${fname}
       mv ${fname}.txt ${fname}
     #html2markdown ${fname} > $(basename $fname .html).md
     #echo $(basename $fname .html).md
 done

