import type { JSX } from 'react';
import BadgeComponent from '@atoms/BadgeComponent';

interface TagListComponentProps {
  tags: string[];
}

function TagListComponent({ tags }: TagListComponentProps): JSX.Element {
  return (
    <div className="flex flex-row flex-wrap mt-4 mb-3 gap-2"> 
      {tags.map(tag => {
        if (tag === "Basic") {
          return (
            <BadgeComponent
              key={tag}
              label={tag}
              variant="outlineDarkBlue"
              size="small"
              className="outline-charcoal text-charcoal outline-1 min-w-[82px] py-0 h-[32px]"
            />
          );
        } else {
          return (
            <BadgeComponent
              key={tag}
              label={tag}
              variant="outlineDarkBlue"
              size="small"
              className="outline-silver text-silver outline-1 min-w-[82px] py-0 h-[32px]"
            />
          );
        }
      })}
    </div>
  );
}
export default TagListComponent;