import { useGetUser } from '@Module/task/apis/user';
import { useParams } from 'react-router-dom';
import DashBody from '@Module/core/components/DataTable/DashBody';
import BackButton from '@Module/core/design-system/BackButton';
import { AxiosQueryStatusEnum } from '@Module/core/enums/Axios';

function UserShowPage() {
    const { id } = useParams();
    const { data, status } = useGetUser({ id: Number(id) });
    const mappedStatus = (status as unknown) as AxiosQueryStatusEnum;

    const user = (data?.data ?? {}) as any;

    return (
        <DashBody status={mappedStatus}>
            <div className="CreatePage">
                <header>
                    <h1>User Details</h1>
                    <BackButton />
                </header>
                <main>
                    <div className="ShowCard">
                        <div className="ShowCard__body">
                            <div className="ShowCard__header">
                                <div className="ShowCard__title">{user?.username ?? '-'}</div>
                            </div>
                            <div className="ShowCard__grid">
                                <div className="field">
                                    <div className="field__label">ID</div>
                                    <div className="field__value">{user?.id ?? '-'}</div>
                                </div>
                                <div className="field">
                                    <div className="field__label">Username</div>
                                    <div className="field__value">{user?.username ?? '-'}</div>
                                </div>
                                <div className="field">
                                    <div className="field__label">Email</div>
                                    <div className="field__value">{user?.email ?? '-'}</div>
                                </div>
                                <div className="field">
                                    <div className="field__label">Phone</div>
                                    <div className="field__value">{user?.phone ?? '-'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </DashBody>
    );
}

export default UserShowPage