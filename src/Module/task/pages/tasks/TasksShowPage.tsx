import { useGetTasks } from '@Module/task/apis/tasks';   
import { useParams } from 'react-router-dom';
import DashBody from '@Module/core/components/DataTable/DashBody';
import BackButton from '@Module/core/design-system/BackButton';
import { AxiosEnum, AxiosQueryStatusEnum } from '@Module/core/enums/Axios';

function TasksShowPage() {
    const { id } = useParams();
    const { data, status } = useGetTasks({id:Number(id)});
    const mappedStatus = (status as unknown) as AxiosQueryStatusEnum;

    const task = data?.data ?? {} as any;
    const normalizedStatus = typeof task?.status === 'string' ? String(task.status).toLowerCase().replace(/\s+/g, '') : '';
    const statusClass = normalizedStatus ? `status-badge status--${normalizedStatus}` : 'status-badge';
    const images = Array.isArray(task?.images) ? task.images : [];
    const resolveImageUrl = (item: any): string => {
      const path = typeof item === 'string' ? item : item?.image || item?.url;
      if (!path) return '';
      return String(path).startsWith('http') ? path : `${AxiosEnum.IMAGE_BASE_URL}${path}`;
    };
    return (
      <DashBody status={mappedStatus}>
        <div className="CreatePage">
          <header>
            <h1>Task Details</h1>
            <BackButton />
          </header>
          <main>
            <div className="ShowCard">
 
              <div className="ShowCard__body">
                <div className="ShowCard__header">
                  <div className="ShowCard__title">{task?.title ?? '-'}</div>
                  <span className={statusClass}>{task?.status ?? '-'}</span>
                </div>
                <div className="ShowCard__grid">
                  <div className="field">
                    <div className="field__label">ID</div>
                    <div className="field__value">{task?.id ?? '-'}</div>
                  </div>
                  <div className="field">
                    <div className="field__label">User</div>
                    <div className="field__value">{task?.user ?? '-'}</div>
                  </div>
                </div>
                <div className="divider" />
                <div className="ShowCard__section">
                  <div className="field">
                    <div className="field__label">Description</div>
                    <div className="field__value">{task?.description ?? '-'}</div>
                  </div>
                </div>
                <div className="divider" />
                <div className="ShowCard__section">
                  <div className="field">
                    <div className="field__label">Images</div>
                    <div className="gallery">
                      {images.length > 0 ? (
                        images.map((imgItem: any, index: number) => {
                          const src = resolveImageUrl(imgItem);
                          if (!src) return null;
                          return (
                          <div className="gallery__item" key={index}>
                            <img src={src} alt={`task-image-${index}`} loading="lazy" />
                          </div>
                          );
                        })
                      ) : (
                        <div className="empty">No images</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </DashBody>
    )
}

export default TasksShowPage