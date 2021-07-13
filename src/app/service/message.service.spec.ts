import { MessageService } from "./message.service";

describe('MessageService', () => {
    let service: MessageService;
    beforeEach(() => {
        service = new MessageService();
    })

    it('should not have messages to start', () => {
        expect(service.messages.length).toBe(0)
    })

    it('should clear all messages when cleared', () => {
        service.clear();
        expect(service.messages.length).toBe(0)
    })

    it('should add a message when add is called', () => {
        service.add('message1')
        expect(service.messages.length).toBe(1)
    })
})